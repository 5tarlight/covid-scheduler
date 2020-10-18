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
     */

    const handleShow = () => {
      this.modal.style.display = 'flex'
    }
    const handleHide = () => {
      this.modal.style.display = 'none'
    }

    return (
      <>
        <div className={'modal'} onClick={e => {
          e.stopPropagation()
          handleHide()
        }} ref={ref => this.modal = ref}>
          <div className={'modal-content'}>
            <div className={'close-bar'}>
              <span onClick={e => {
                e.stopPropagation()
                handleHide()
              }}>&times;</span>
            </div>
            <input placeholder={'제목'} />
          </div>
        </div>

        <div
          className={(cx('delete'))} onClick={e => {
          e.stopPropagation()
          handleShow()
        }}
        >[수정]
        </div>
      </>
    )
  }
}

export default ModifyModal
