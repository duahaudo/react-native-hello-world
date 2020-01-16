import React, {useState, useEffect} from "react"
import {View, Modal, Alert} from "react-native"
import {INote} from "../../duck/type"
import {StiInput} from "../controls/input"
import {StiBtn} from "../controls/button"
import {StiModal} from "../controls/other"
import style from "./style"

import { useDispatch } from 'react-redux'
import { closeNoteModal } from "../../duck/action"


export default ({ currentNote, show, onClose }) => {
  const dispatch = useDispatch();

  const [note, setNote] = useState<INote>(currentNote)

  useEffect(() => {
    setNote(currentNote)
  }, [currentNote])

  return <View>
    <StiModal show={show}>
      <View style={style.modal}>
        <View style={style.inputs}>
          <StiInput title="Title" value={note.title} onChangeText={(text: string) => setNote({...note, title: text})}/>
          <StiInput title="Content" value={note.content} style={{height: 250}}
                    onChangeText={(text: string) => setNote({...note, content: text})} multiline={true} numberOfLines={4}/>
        </View>
        <View style={style.saveBtn}>
          <StiBtn onPress={() => dispatch(closeNoteModal(note))} title="Save" />
        </View>
      </View>
    </StiModal>
  </View>
}