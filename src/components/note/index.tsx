import React, {useEffect} from 'react'
import { View, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { openNoteModal, closeNoteModal, initData } from "../../duck/action"
import style from "./style"
import { IStoreState, INote } from '../../duck/type';
import {StiTxt} from "../controls/input"
import {StiView} from "../controls/other"
import moment from "moment"

import NoteCrud from "./crud"

interface IProps {
  notes: INote[],
  crudModalOpen: boolean,
  note: INote,
  loaded: boolean
}

export default () => {
  const dispatch = useDispatch();
  const props: IProps = useSelector(({ reducer }: IStoreState) => {
    return {
      notes: reducer.notes,
      crudModalOpen: reducer.crudModalOpen,
      note: reducer.selectedNote || {},
      loaded: reducer.loaded
    }
  })

  useEffect(() => {
    if (!props.loaded) {
      AsyncStorage.getItem("Sti_note").then((notesStr: string) => {
        console.log(notesStr)
        dispatch(initData(JSON.parse(notesStr)))
      })
    }
  }, [props.loaded])

  return (
    <View style={style.container}>
      <NoteCrud currentNote={props.note} show={props.crudModalOpen} 
        onClose={(updatedNote: INote) => {
          dispatch(closeNoteModal(null))
        }} />

      {props.notes.length === 0 && <StiView style={style.center}>
        <StiTxt>No Result found.</StiTxt>
      </StiView>}

      {props.notes.length > 0 && <ScrollView style={style.list}>
        {props.notes.map((noteItem: INote, idx: number) => (<TouchableOpacity 
          key={noteItem.id} 
          onPress={() => dispatch(openNoteModal(noteItem))}>
            <View style={style.listItem}>
              {noteItem && <StiTxt>{noteItem.title}</StiTxt>}
              {noteItem && <StiTxt style={{fontSize: 12, color: "grey"}}>{moment(noteItem.timestamp).format("DD/MM/YYYY HH:mm")}</StiTxt>}
            </View>
        </TouchableOpacity>))}
      </ScrollView>}
    </View>
  )
}