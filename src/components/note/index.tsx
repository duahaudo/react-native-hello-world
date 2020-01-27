import React, {useEffect} from 'react'
import { View, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { openNoteModal, closeNoteModal, initData, deleteNote, showLoading } from "../../duck/action"
import style from "./style"
import { IStoreState, INote } from '../../duck/type';
import {StiTxt} from "../controls/input"
import {StiView} from "../controls/other"
import moment from "moment"

import NoteCrud from "./crud"
import { StiIconFontAwesome5 } from '../../components/controls/icon';

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
    dispatch(initData())
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
              <View style={style.listItem2}>
                <StiIconFontAwesome5 name="ban" color="red" onPress={() => dispatch(deleteNote(noteItem.id))} />
                {noteItem && <StiTxt style={style.title}>{noteItem.title}</StiTxt>}
              </View>
              {noteItem && <StiTxt style={{fontSize: 12, color: "grey"}}>{moment(noteItem.timestamp).format("DD/MM/YYYY HH:mm")}</StiTxt>}
            </View>
        </TouchableOpacity>))}
      </ScrollView>}

      <View style={style.plusBtn}>
        <StiIconFontAwesome5 name="plus" size={25} color="white" onPress={() => dispatch(openNoteModal(null))} />
      </View>
    </View>
  )
}