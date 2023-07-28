import { Subscriber } from './subscriber';

const myId            = document.getElementById('my-id');
const leaveButton     = document.getElementById('leave-button');
const listButton      = document.getElementById('list-button');
const buttonArea      = document.getElementById('button-area');
const remoteMediaArea = document.getElementById('remote-media-area');

(async () => {

  const searchParams = new URLSearchParams(window.location.search);
  const me = new Subscriber(searchParams.get('room'), buttonArea, remoteMediaArea);
  await me.initMyContext(searchParams.get('key'));

  myId.textContent = me.myInfo.id;

  me.myRoom.publications.forEach(publication => {
    me.subscribeAndAttach(publication);
  });

  leaveButton.onclick = async () => {
    me.leaveRoom();
    myId.textContent = "leaved";
  };

})();