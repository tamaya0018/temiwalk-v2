import { Subscriber } from './subscriber';

const myId            = document.getElementById('my-id');
const listButton      = document.getElementById('list-button');
const buttonArea      = document.getElementById('button-area');
const remoteMediaArea = document.getElementById('remote-media-area');

(async () => {

  const searchParams = new URLSearchParams(window.location.search);
  const me = new Subscriber(searchParams.get('room'), buttonArea, remoteMediaArea);
  await me.initMyContext(searchParams.get('key'));
  const pubId = searchParams.get('id');

  myId.textContent = me.myInfo.id;

  me.myRoom.publications.forEach(publication => {
    me.subscribeAndAttach(publication);
  });

})();