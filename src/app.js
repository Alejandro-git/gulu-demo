import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }

})


// import chai from 'chai'

// import spies from 'chai-spies'

// chai.use(spies)

// const expect = chai.expect
// // 单元测试

// {
//     // 测试按钮含有 icon
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     }).$mount()
//     const useElement = vm.$el.querySelector('use')
//     expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             loading: true
//         }
//     }).$mount()
//     const useElements = vm.$el.querySelectorAll('use')
//     expect(useElements.length).to.equal(1)
//     expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//         }
//     }).$mount(div)
//     const icon = vm.$el.querySelector('svg')
//     expect(getComputedStyle(icon).order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             iconPosition: 'right'
//         }
//     }).$mount(div)
//     const icon = vm.$el.querySelector('svg')
//     expect(getComputedStyle(icon).order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//         }
//     }).$mount()
//     // vm.$on('click', function(){
//     //   console.log('hi')
//     // })
//     // vm.$el.click()
//     const spy = chai.spy(() => { })
//     vm.$on('click', spy)
//     vm.$el.click()
//     expect(spy).to.have.been.called()
// }
