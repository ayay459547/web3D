import {request} from './request'
import {apikey} from '../common/utils'

export function getCubeImg(q,per_page){
  return request({
    url: "/",
    params: {
      key: apikey,
      q,
      per_page
    }
  })
}