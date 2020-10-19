import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import deleteStyle from './ModifyModal.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(deleteStyle)

class ModifyModal extends Component {
  render() {
    const { onModify } = this.props
    /*
      #refs
      this.modal
      this.title
      this.detail
      this.place
      this.loc
     */

    const handleShow = () => {
      this.modal.style.display = 'flex'
    }

    const handleHide = () => {
      this.modal.style.display = 'none'
    }

    const handleKeyPress = e => {
      if (e.key === 'Enter' && this.title.value.trim()) {
        sendModifyRequest()
        handleHide()
      } else if (e.keyCode === 27) { // Escape
        console.log(e.keyCode)
        handleHide()
      }
    }

    const sendModifyRequest = () => {
      onModify(this.title.value.trim())
      // onModify(objectify())
    }

    const sendAndHideRequest = () => {
      sendModifyRequest()
      handleHide()
    }

    const objectify = () => {
      return {
        title: this.title.value.trim(),
        detail: this.detail.value.trim(),
        place: this.place.value.trim(),
        loc: this.loc.value.trim()
      }
    }

    return (
      <>
        <div
          className={cx('modal')}
          onClick={e => {
            e.stopPropagation()
            handleHide()
          }}
          ref={ref => this.modal = ref}
          onKeyDown={handleKeyPress}
        >
          <div className={cx('modal-content')} onClick={e => e.stopPropagation()}>
            <div className={cx('close-bar')}>
              <span onClick={e => {
                e.stopPropagation()
                handleHide()
              }}>&times;</span>
            </div>
            <input placeholder={'제목'} ref={ref => this.title = ref} />
            <textarea className={cx('textarea-detail')} placeholder={'상세내용'} ref={ref => this.detail = ref}/>
            <input placeholder={'장소'} ref={ref => this.place = ref} />
            <input placeholder={'일시'} ref={ref => this.loc = ref} />
            <button className={'save-btn'} onClick={sendAndHideRequest}>저장</button>
          </div>
        </div>

        <div
          className={(cx('delete'))} onClick={e => {
          e.stopPropagation()
          handleShow()
        }}
        >[편집]
        </div>
      </>
    )
  }
}

export default ModifyModal
