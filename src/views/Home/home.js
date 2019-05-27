import { Component, Vue } from 'vue-property-decorator'
import template from './home.html'
import HelloWorld from '../../components/hello'

@Component({
  template,
  components: {
    HelloWorld
  }
})
class Home extends Vue {}

export default Home
