import firebase from "firebase";

import { IMessage, config } from "../../lib";

const { collections } = config.firebase;

export function submitMessage(message: IMessage): Promise<boolean> {
  return firebase
    .firestore()
    .collection(collections.messages)
    .add(message)
    .then((value: firebase.firestore.DocumentData) => {
      console.log("Successfully submitted message: ", value);
      return true;
    })
    .catch((error: Error) => {
      console.log("Error occured when submitting message: ", error.message);
      return false;
    });
}

export interface State {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
  name: string;
  email: string;
  message: string;
}
