import {request} from "./request"
import {apikey} from '../common/utils'

export function getVideo(q, per_page){
  return request({
    url: "/videos/",
    params:{
      key: apikey,
      q,
      per_page
    }
  })
}