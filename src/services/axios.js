import axios from 'axios'
import { baseUrl } from '@/config/url'

class HttpRequest {
  constructor(baseURL = baseUrl) {
    this.baseUrl = baseURL
    // 请求队列
    this.queue = {}
  }

  getInsideConfig() {
    // 默认的配置
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }

  // 拦截器
  interceptors(instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      (config) => {
        // 在发送请求之前做某事
        // 如果请求队列里有值，可以添加全局loading
        if (!Object.keys(this.queue).length) {
          // Spin.show()
        }
        this.queue[url] = url
        return config
      },
      (error) => {
        // 请求错误时做些事
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    instance.interceptors.response.use(
      (res) => {
        // 对响应数据做些事
        delete this.queue[url]
        return res.data
      },
      (error) => {
        // 请求错误时做些事
        delete this.queue[url]
        return Promise.reject(error.response.data)
      }
    )
  }

  request(options) {
    let _options = options
    // 使用自定义配置创建axios的新实例
    const instance = axios.create()
    // 默认配置和传入的配置合并，相同的配置默认会被传入的覆盖
    _options = Object.assign(this.getInsideConfig(), _options)
    this.interceptors(instance, _options.url)
    return instance(_options)
  }
}

export default HttpRequest
