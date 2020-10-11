import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import deleteStyle from './ModifyModal.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(deleteStyle)

const ModifyModal = ({ onModify }) => {
  let modifyValue = React.createRef()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }
  const handleKeyPress = e => {
    if (e.key === 'Enter' && modifyValue.value.trim()) {
      onModify(modifyValue.value.trim())
      handleClose()
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} onClick={e => e.stopPropagation()}>
        <Modal.Header closeButton>
          <Modal.Title>수정할 내용을 입력해 주세요.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input autoFocus className={cx('modify-input')} ref={ref => modifyValue = ref} onKeyPress={handleKeyPress} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={e => {
            e.stopPropagation()
            handleClose()
          }}>
            취소
          </Button>
          <Button variant="primary" onClick={e => {
            e.stopPropagation()
            onModify(modifyValue.value.trim())
            handleClose()
          }}>
            적용
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={(cx('delete'))} onClick={e => {
        e.stopPropagation()
        handleShow()
      }}>[수정]</div>
    </>
  )
}

export default ModifyModal
