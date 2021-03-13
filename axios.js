import Axios from 'axios';
const baseURL = 'http://api.zhinengshe.com/10001-you163/'
const apikey = "665e1dd2f4c349c6b8cd64d488f335f1"


export default {
    install(Vue) {
        let axios = Axios.create({
            baseURL,
            headers: {
                apikey
            }
        })
        const request = async(type, path, value) => {
            try {

                let data = await axios[type](path, value)

                if (data.data.err) {
                    Vue.prototype.$message.error(data.data.msg)
                } else {
                    console.log(data)
                    return data.data.data;
                }
            } catch (error) {
                console.log(error)
            }
        }
        Vue.prototype.$http = {

            getBanners() {

                return request("get", "/banners")


            },

            getSuggest(value) {
                return request("get", "/searchautocomplete", {
                    params: {
                        kw: value
                    }
                })

            },

            getMenu(index) {
                return request("get", "/catalog", {
                    params: {
                        index
                    }
                })

            },

            getSidebar() {
                return request("get", "/sidebar")
            },


            getImg(src) {
                return baseURL + src + "?apikey=" + apikey
            }


        }
    }
}