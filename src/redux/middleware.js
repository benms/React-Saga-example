import { CREATE_POST } from "./types"
import { showAlert } from './actions'

const forbidden = ['fuck'];

export function spamWordsMiddleware({ dispatch }) {

  return function (next) {

    return function (action) {

      if (action.type === CREATE_POST) {

        const found = forbidden.filter(v => action.payload.title.includes(v))

        if (found.length) {

          return dispatch(showAlert(`You spammed word '${found}'`))
        }
      }

      return next(action)
    }
  }
}
