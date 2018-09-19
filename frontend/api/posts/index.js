import fetch from 'isomorphic-fetch'

export function getPosts() {
  return fetch('http://mugle.org/PilotBoard/select')
}

export function getPost(seq) {
  return fetch(`http://mugle.org/PilotBoard/select?seq=${seq}`)
}

export function createPost(name, title, content) {
    return fetch(`http://mugle.org/PilotBoard/create?id=${name}&title=${title}&content=${content}`)
}

export function deletePost(seq) {
    return fetch(`http://mugle.org/PilotBoard/delete?seq=${seq}`)
}