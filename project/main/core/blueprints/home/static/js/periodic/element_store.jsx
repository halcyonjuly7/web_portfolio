import {observable, action, computed} from "mobx";


class ElementStore {
    @observable
    current_element  = {};

    @action
    elementHovered = (element_info) => {
        this.current_element = element_info
    }

    @computed get
    getElement() {
        return this.current_element;
    }
}

const element_store = new ElementStore();
export default element_store;