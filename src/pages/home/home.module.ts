import firebase from "firebase";

import { IMessage, config } from "../../lib";

const { collections } = config.firebase;
const regexp: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


export function submitMessage(message: IMessage): Promise<boolean> {
  return firebase
    .firestore()
    .collection(collections.messages)
    .add({
      ...message,
      timestamp: Date.now()
    })
    .then((value: firebase.firestore.DocumentData) => {
      console.log("Successfully submitted message: ", value);
      return true;
    })
    .catch((error: Error) => {
      console.log("Error occured when submitting message: ", error.message);
      return false;
    });
}

export const validate = (values: any): any => {
  let errors: any = {};
  const { name, email, message } = values;
  const emptyMessage = "This field cannot be empty";
  const invalid: string = "Invalid email address";

  if(!name) {
    errors.name = emptyMessage
  }

  if(!email) {
    errors.email = emptyMessage
  } else if (!regexp.test(email)) {
    errors.email = invalid;
  }

  if(!message) {
    errors.message = emptyMessage;
  }
  
  return errors;
}


export interface State {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
  name: string;
  email: string;
  message: string;
}
