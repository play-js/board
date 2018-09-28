import fetch from 'isomorphic-unfetch'

export function getPosts() {
  return fetch('http://52.70.180.248/select', {mode: "no-cors"})
}

export function getPost(seq) {
  return fetch(`http://52.70.180.248/view?seq=${seq}`, {mode: "no-cors"})
}

export function createPost(id, title, content) {
    return fetch(`http://52.70.180.248/create?id=${id}&title=${title}&content=${content}`, {mode: "no-cors"})
}

export function deletePost(seq) {
    return fetch(`http://52.70.180.248/delete?seq=${seq}`, {mode: "no-cors"})
}

export function updatePost(seq, id, title, content) {
  return fetch(`http://52.70.180.248/update?seq=${seq}&id=${id}&title=${title}&content=${content}`, {mode: "no-cors"})
}