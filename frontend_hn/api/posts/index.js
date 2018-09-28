import fetch from 'isomorphic-unfetch'

export function getPosts() {
  return fetch('http://52.70.180.248/select', {mode: "no-cors"})
}

export function getPost(seq) {
  return fetch(`http://52.70.180.248/view?seq=${seq}`, {mode: "no-cors"})
}

export function createPost(name, title, content) {
    return fetch(`http://52.70.180.248/create?id=${name}&title=${title}&content=${content}`, {mode: "no-cors"})
}

export function deletePost(seq) {
    return fetch(`http://52.70.180.248/delete?seq=${seq}`, {mode: "no-cors"})
}