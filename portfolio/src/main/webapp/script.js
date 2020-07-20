// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random favorite to the page.
 */
function addRandomFavorite() {
  const favorites =
      ['bunnies', 'surprise, its a wild claire!', 'bunnies of all kinds', 'birds', 'borbs', 'birbs', 'the color blue', 'swimming', 'videogames (message me if u wanna play)', 'my friends', 'my family', '<3'];

  // Pick a random favorite.
  const favorite = favorites[Math.floor(Math.random() * favorites.length)];

  // Add it to the page.
  const favoriteContainer = document.getElementById('favorite-container');
  favoriteContainer.innerText = favorite;
}

// function getData() {
// 	fetch('/data').then(response => response.json()).then((comments) => {
// 		console.log(comments[0]);
// 		console.log(comments[1]);
// 		console.log(comments[2]);
// 		console.log(comments[3]);
// 	});
// }

function getData() {
	fetch('/data').then(response => response.json()).then((comments) => {
		const commentElement = document.getElementById('data-container');
		commentElement.innerHTML = '';
      for (i = 0; i < comments.length; i++) {
        commentElement.innerHTML += comments[i] + '<br/>';
      }
	});
}
