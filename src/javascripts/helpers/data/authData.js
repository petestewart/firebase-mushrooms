import firebase from 'firebase/app';
import 'firebase/auth';
import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistList from '../../components/mycologistList/mycologistList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const logoutButton = $('#navbar-logout-button');
const hutDiv = $('#hut');
const singleMycoDiv = $('#single-myco');
const newShroomDiv = $('#new-shroom');
const newMycoDiv = $('#new-myco');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      hutDiv.removeClass('hide');
      singleMycoDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      newShroomDiv.removeClass('hide');
      newMycoDiv.removeClass('hide');
      mushroomList.buildForest();
      mycologistList.buildHut();
      mushroomList.forestEvents();
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      hutDiv.addClass('hide');
      singleMycoDiv.addClass('hide');
      newShroomDiv.addClass('hide');
      newMycoDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
