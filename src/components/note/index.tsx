import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, Modal, Alert, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';
import { newNote, action } from "../../duck/action"
import style from "./style"
import { IStoreState, INote } from '../../duck/type';
import {uniqueId} from "lodash"

interface IProps {

}

export default () => {
  const dispatch = useDispatch();
  const notes: INote[] = useSelector(({ reducer }: IStoreState) => reducer.notes)

  const [showCrud, setShowCrud] = useState<boolean>(false)
  const [note, setNote] = useState<INote | {}>({})

  return (
    <View style={style.container}>
      <NoteCrud currentNote={note} show={showCrud} onClose={(updatedNote: INote) => {
        setShowCrud(false)
        dispatch(newNote(updatedNote))
      }} />

      {notes.length === 0 && <StiView style={style.center}>
        <StiText>No Result found.</StiText>
      </StiView>}

      <ScrollView>
        {notes.map((noteItem: INote, idx: number) => (<TouchableOpacity key={noteItem.id} onPress={() => {
          setNote(noteItem)
          setShowCrud(true)
        }}>
          <StiText>{noteItem.title}</StiText>
        </TouchableOpacity>))}
      </ScrollView>

      <StiButton onPress={() => {
        setNote({
          timestamp: Date.now(),
          id: uniqueId(`sti_note_${Date.now()}_`),
          title: "",
          content: ""
        })
        setShowCrud(true)
      }} title="New Note" />
    </View>
  )
}

const NoteCrud = ({ currentNote, show, onClose }) => {

  const [note, setNote] = useState<INote>(currentNote)

  useEffect(() => {
    setNote(currentNote)
  }, [currentNote])

  return <View>
    <Modal
      animationType="slide"
      transparent={false}
      visible={show}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={style.modal}>
        <View>
          <StiInput title="Title" value={note.title} onChangeText={(text: string) => setNote({...note, title: text})}/>
          <StiInput title="Content" value={note.content} onChangeText={(text: string) => setNote({...note, content: text})}/>

          <StiButton onPress={() => onClose(note)} title="Save" />
        </View>
      </View>
    </Modal>
  </View>
}

const StiText = props => <Text style={style.text}>{props.children}</Text>
const StiView = props => <View style={style.view}>{props.children}</View>
const StiInput = ({title, value, onChangeText}) => (
  <View>
    <StiText>{title}</StiText>
    <TextInput
      style={style.input}
      onChangeText={text => onChangeText(text)}
      value={value}/>
  </View>
)

const StiButton = props => (
  <TouchableOpacity style={style.button} onPress={() => props.onPress()}>
    <Text> { props.title } </Text>
  </TouchableOpacity>
)