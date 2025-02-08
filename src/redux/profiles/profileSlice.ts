import { createSlice } from "@reduxjs/toolkit";

export interface pupil {
    image: string,
    name: string,
    age: number,
    gender: string,
    description: string,
    likes: string[],
    dislikes: string[],
    nickname: string
}
  
  
const initialState: pupil[] = [
    {
      image: '/assets/images/eunice.png',
      name: 'Adjetey Eunice Naa Adjeley',
      age: 11,
      gender: 'female',
      description: 'I am thick and tall. I have normal sized facial features. Oh! And I am dark in complexion. I really wanna be a Pilot in future.',
      likes: ['Rice with soup','Pen games','Reading'],
      dislikes: ['Banku with pepper'],
      nickname: 'Ice'
    },
    {
      image: '/assets/images/eduwodzie.webp',
      name: 'Mortey-Abbot Eduwodzie',
      age: 12,
      gender: 'female',
      description: 'I am a proud Anlo beauty from the Volta Region. I am currently residing in Teshie in Greater Accra. I am about 3 feet tall and well sized. I am fair in complexion.',
      likes: ['Jollof with chicken','Banku with okro soup','Car race','Sonic','Temple run','Bike race'],
      dislikes: ['People who insult','Gossips'],
      nickname: 'Tod'
    },
    {
      image: '/assets/images/jesse.webp',
      name: 'Afriyie Jesse Mann',
      age: 10,
      gender:'male',
      description: 'I am slim and tall. I am at least three and a half (3.5) feets tall . I have always dreamt of becoming a pilot in future.',
      likes: ['Fried rice with chicken','Banku with pepper','Jollof rice','Football','Drawing','Painting','Reading'],
      dislikes: ['Banku with okro soup','Rice with stew','Car race','Sonic','Temple run','Writing'],
      nickname: 'Small Lion'
    },
    {
      image: '/assets/images/jonas.png',
      name: 'Amewuda Jonas Mugnos Tetteh',
      age: 10,
      gender: 'male',
      description: 'I am a tall, dark skinned boy. I love reading and I take that as my hobby. I dream of becoming a teacher in the future.',
      likes: ['Jollof rice','Football','Drinks','Reading story books'],
      dislikes: ['Gossips','Disobedient People','Beating'],
      nickname: 'Dagger'
    },
    {
      image: '/assets/images/jayden.png',
      name: 'Neequaye Kotey Jayden Bryce',
      age: 9,
      gender: 'male',
      description: 'I am a short light skinned boy with long arms and legs. I am about 160cm tall and weigh about 32Kg. I have normal sized facial features. I hope of becoming an engineer in future.',
      likes: ['food','video games','reading','running'],
      dislikes: ['Gossips','Beatings','Slaps'],
      nickname: 'Smart Boy'
    }
  ]

const profileSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
    }
})

export default profileSlice.reducer