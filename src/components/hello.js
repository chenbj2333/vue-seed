import { Component, Vue, Prop } from 'vue-property-decorator'
import template from './hello.html'
import './hello.scss';

@Component({
  template
})
class Hello extends Vue {
  @Prop({
    type: String,
    default: 'hello'
  })
  msg
}

export default Hello
