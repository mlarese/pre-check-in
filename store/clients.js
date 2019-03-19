import _cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'

export const state = () => {
    return {
        list: [],
        recordList: [],
        record: {},
        $record: {},
        addRecord: {},
        resetItem: {},
        filterActive: false,
        form: {valid: false, dirty: false},
        mountingForm: false,
        grid: {pagination: {}},
        mode: 'add',
        select: [
            {value: 16, name:'OSPITE SINGOLO'},
            {value: 17, name:'CAPOFAMIGLIA'},
            {value: 18, name:'CAPOGRUPPO'},
            {value: 19, name:'FAMILIARE'},
            {value: 20, name:'MEMBRO GRUPPO'}
        ]
    }
}

const root = {root: true}

export const mutations = {
    setRecordList (state, payload) { state.recordList = payload },
    setPagination (state, payload) { state.pagination = payload },
    setList (state, payload) {
        state.list = payload
        state.useCache = true
        state.grid = {pagination: {}}
    },
    setRecord (state, payload) {
        state.record = _cloneDeep(payload)
        state.$record = _cloneDeep(payload)
        state.loaded = true
    },
    set$Record (state, payload) {
        state.$record = _cloneDeep(payload)
        state.loaded = true
    },
    updateItemList (state,  {data, index}) {
        Vue.set(state.list, index, data)
    },
    addRecord (state,  p ) {
        state.list.push(p)
    },
    reset$Record (state) {
        state.$record = {}
    },
    setMode (state, payload) { state.mode = payload },
    setForm (state, payload) { state.form = payload },
    setFormValid (s, p) { s.form.valid = p },
    setFormDirty (s, p) { s.form.dirty = p },
    setEditMode (s) { s.mode = 'edit' },
    setViewMode (s,{item, active}) {
        Vue.set(item, 'isViewMode', active)},
    setAddMode (state) { state.mode = 'add' }

}
export const actions = {
    update ({dispatch, commit, state}, {data, id}) {
        const url = `/clients/${id}`
        return dispatch('api/put', {url, data}, root)
    },
    edit({commit}, item) {
        commit('set$Record', item)
        commit('setEditMode')


    },
    cancelItem({commit}) {
        commit('reset$Record')
        commit('setAddMode')
    },

    save ({dispatch, commit, state, getters}, item) {
            return dispatch('update', {data:item, id:item.reservation_ps_id})
                .then(r => {
                    commit('setViewMode', {item, active:true})

                })

    },
    insert ({dispatch, commit}, {data}) {
        const url = `/clients`
        return dispatch('api/post', {url, data}, root)
    },
    load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
        if (!force && state.loaded) {
            return
        }
        if (id === null) {
            return dispatch('api/get', {url: `/clients`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            return dispatch('api/get', {url: `/clients/{id}`, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    },
}

export const getters = {
    isEditMode: s => s.mode === 'edit',
    isAddMode: s => s.mode === 'add',
    isViewMode: s => s.mode === 'view'
}

