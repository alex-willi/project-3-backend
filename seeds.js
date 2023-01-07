const mongoose = require('mongoose')
const Post = require('../models/Posts')
const posts = [
  {
    title: 'post1',
    photo: 'https://picsum.photos/id/1/200/300',
    body: 'some body',
    author: {
      _id: '63b5959bf15c91fcb9f7977d'
    }
  },
  {
    title: 'post2',
    photo: 'https://picsum.photos/id/1/200/300',
    body: 'some body',
    author: {
      _id: '63b5959bf15c91fcb9f7977d'
    }
  },
  {
    title: 'post3',
    photo: 'https://picsum.photos/id/1/200/300',
    body: 'some body',
    author: {
      _id: '63b599b06e4c8a76401a4ad6'
    }
  }
]