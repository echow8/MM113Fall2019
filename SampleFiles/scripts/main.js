const StarTrekTweet = {
    name: 'Star Trek',
    handle: '@StarTrek',
    text: 'Welcome to the OFFICIAL Star Trek Twitter Page!'
}

const links = ['https://twitter.com/StarTrek', 'https://twitter.com/StarTrek', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/26/1530003551-star-trek.jpg']

const modifyText = () => {
  //Change the text of message2 to be the message of the StarTrekTweet object
  //Change the text of user2 to be the handle from the StarTrekTweet object
  //Changes the text of message 2 class to be the handle from the StarTrekTweet object
  // YOUR CODE BELOW THIS LINE.
    document.getElementById('message2').innerHTML = StarTrekTweet.text;
    document.querySelector('#link2').innerHTML = StarTrekTweet.handle;
    document.getElementById('user2').innerHTML = StarTrekTweet.name;
}

const changeLinkAndImageAttributes = () => {
  //Set the href attribute for link1 to point to the first element in the links array
  //Sets the href attribute for link2 to point to the second element in the links array
  //Sets the src attribute for the Ohlone image to point to the third element in the links array
  // YOUR CODE BELOW THIS LINE.
    document.querySelector('#link1').href = links[0];
    document.querySelector('#link2').href = links[1];
    document.querySelector('#Ohlone').src = links[2];
}

const changeClassAttribute = () => {
  //Update the changeClassAttribute
  //function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.
  // change id="tweet1" class="tweet" to id="tweet1" class="tweet-pink"
  // YOUR CODE BELOW THIS LINE
    document.getElementById('tweet1').className = 'tweet-pink';
}

const appendElements = () => {
  //A. An "a" element (a link) to the bottom of tweet1 that links to Ohlone College
  //(http://www.ohlone.edu) and has a link text that say "Intro to JavaScript."
  //B. An "img" element (an image) to the bottom of tweet1 that
  //points to an image of your choice,symbolizing something about the course.
  //id="tweet1"
  // YOUR CODE BELOW THIS LINE
    const newLink = document.createElement ('a');
    newLink.href = 'http://www.ohlone.edu';
    newLink.appendChild(document.createTextNode('Intro to Javascript'));
    document.getElementById('tweet1').appendChild(newLink);
    const img = document.createElement('img');
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC0CAMAAACJ8pgSAAAAwFBMVEX///8AAAAACwsBCQv8/PwAAAP9//////0ABQbw8/Tb4OAaHyD+/P4CDg3IzM35+fnn6urj5OQAEhPY2NhbW1vHx8f09PTR0dEADRA9PT2YmJiysrLn5+dycnK8vLwtLi6Hh4cgJScHDheoqKhFRUUhISFMTEydnZ17e3u2traUlJQ5OD3g3+OIi4x/g4IXGhzP19ZWWVkWGB08QEKjraxgZmckLSoIGRkAEw4ACABQUFBnZmpaWl6OjZJ0c3YRERHEXMbwAAAI0ElEQVR4nO2dC3uazBKAZ2HdgMEsFEFTEJNo4iUxl/bza2su/v9/dWYvmETpOcekppXOa57Wuqx1X4dl2R0IAEEQBEEQBEEQBEEQBEEQBEEQBEEQBLEfBC+BA2Sr6gclO/p4fwrkpRryggjF+ku1auGbMFKk9MOo2WzeTibTWbYh6n/AZSohwL+55Hw3H/PjKU6ue7354rJ/wyynzWC71nFIIVVutKCaMC11sIar8W6aYisvXAo5vfh6PB8oPbv6nB+N9uJauq7jeodbehHi1ppdxrXRAoOL9uJGB0vXcR0U0zhsqs7i/0QZDA+Z47SwNuunXFXdrnv6M+HYM0TxrMWwXS3XdRxvGy/Yz0ox0/HmOI7LHqHsyvcdjm3jKSSHnmrYtl5U9fAL01awusegLl4kHltTnoqCtd7mBRLU4mkx7pJd1cWLahkXXMg73JO234/wkZndSP+wuDZeNNiUAfPe0L/go0AvSyUFD2fMr5sXEdrec8t+l0NkK6Ia9gXq5QVb47/FixKDe6Dtd5dsCnXzAmG38QYvihhHP9oL68sgqJkX4Tfesh9hwAhxxJjnOYwd+7pibbToqQa/8YZ+VyNFs+0x1p/lIGtzPq14rxc8ykfNZgh1mmdQvNeLxBNNfAulhbys0NNR+g/y8nfwK7yoFZa6QfFSDXmp5r95USO36loHQtRu1eg1lV7M0JWroVpQOVyr5XLaK37qBcckXE3O4Ihts9Zf6sWsRJaBUnHO83d6scuzYVFM8BGr5xvLtRVnzrU5Z1RsesEzHnzt9nq16MbuMqkmW150wvZ5GjaPjoosGwyuxzO/XnMMG17wlEcUX5mdcHLV2hA7z9Qk+fOhisPotL9ceuwFR3X3IsI5Y47R0mo56sHYOOXBSy9qrdJjrmcXcB2n9l5EccrcFj4cSwv5waYYMataATzqgGqVq7itVk29aAONw6aAkQqWcudQK5EqaDAekhcd6wEU7f7zer+a7FNeaiRmzcstzBg6YIvpP/9k2fSYeV7Lrif2/edmmzFN5wSDpqXX5JQX83a/qR2/mtdeTptjhrHSO1KHJCzzJ0vW0mWuy0bPtbhZrIT8gnl/gRfv9I41WDtWg10hAy65ODplLetl+KLNXK9sSwhPG079vWDjG2zA9Tycmu1XfxXMHK+xrLOqpUcvWCghY6a03l66LitsQWAHvmLMSi8DWJ+sxD2N6WQIp9Ze8Dg0fT75MaUyNF48l91tzjwE0LUdc529uGxuJ1bKc0KOpwVzZuOlvzkfg14aTv29dG/xLKD0omcbsJcZlV6WsLEjBfCl7l5cx+bXvYwX3I90Moei4YbCsqoeQKtR6/7lp/O7HOLSixfCz7zU9nj0My/Y0+bkZdMLDvgj8lIVL+TlJ+tH5IW8rCAv1ZCXashLNeSlGvJSDXmphrxUQ16qIS/VkJdqyEs1O/Oy54lD5KWaHXv5iCbshN16Kf+1f73OTr3w5/9i39iZF3WZCaRxfHsb7qOY3XmRAJOhyi36d+rv3z0tdulloHLNWo7H7vYuXN7rBUovrvHyjEoBWXqoRaUt9nbbiB1woLLdfb2SqvKlYvHai9AXj5sVaM8N5dpVjEEKNyY/psWOOA/MpcJGXdRXJa72zTpi3y5nUx5CcxW0qz7/62usuJSiWXpht2L9KgoJpmrLY5nggcqKLilMNXMTlBnwPdyXYuZ1TbrUDNLXRRhNGSuTYyaCrx1ZAn2pvo6XHm6MAbOKl3GZaKXedyG3uxHRb0eon7FJ7la9xK190ZYKIWXbenHYqb9xyB1ZLygmESCewwWemOpcrJevYo/ixX6D8jNTd1KyYkYRWDHmegn/utSibjYwCcuapplZeX+qltpZdAKedYPGbMKia/KN9ideJA+L0Xhxvrr3FuIx57iXRbo4Torp3aG+N4yFseV8VPiBysZMkmz+L3NtarPuf1gfq0qt5QCOdAqrjZcR7M8QBhvXeXlHMts+dTHEZ73BmL1K6TYHa3wplIHkTX3Tu/ICgVIqwz7IiBH+vExYdNmNL/fngIRe4iVrePidl3ge89iPHzaF+eR1od5AtT0UgQzCvrpw4nUhwgrBrZhoqBPQcC/yCrE/WlQSYXz+qas4Ozv7ZPj26fv372ygN5gxXdj9VIJPu273JlQH8/D4B27ZNfXLbb59Y0qBsoJ2/AtzkcGnI3UDwL3x8gEM2sfHi8/pHnUuHwN2z1Lq7HHiJdwk1JOWNfA0Qv3sT5/7cSgnFC8EQRAEQRAEQRAEQRAEsR16InbjPgNqblZykPbOJqqYg70RynPNslia4lrNWkp9B6D1OWpsqr4Zc/kqN3LUpO3rbcxbqN9x8/L+XDVABUaWDNZ/6xXPE2XDvFoMwkGyunv18zb2KS9GkOU1ixdszTBOL/L1V+MpTCJrgZ+n2bXNgxisEmV4lpp44ekF+POoZvECcQ9ku9NJIW3GPIrTFKIYZJTLdoYO8BUOfVmcYOz4ndgfJjyNc4jyKL5III0jwM0XGFOjtdSiPYfD6DOk7dH0KbhPRtPiLBh3kjEGw7Fsq71rNul1jBcensSP+bAIHpL7dNJ/fFwkwVMyjrNp5xwgvvvdLfm1cPiM33Tb7zzlZ+APry7T4TjBHSgaQi/BvjSMLgrlZYZdzvGjDw9XQZxcxlf3QfBw1bkctbOlD3Pg8fB3t+TXgvGivOSdMXqBi6vHS9nGfab0AsNkWph4gTweXMJDnl/m91f5AtKHPFGJqCzlbfSygHr1uxDPIR8m2cK/HqAi7G2mEzz2Fn150os4sGx8nbN40Ja8c5I8wXBanE8WWTHMeXsa3k8HncF9cZxANqqZFw4XcRqFeYQxovLIUjMQCXOZNkMAHwvx4Uc4SomiFMJIRpGP26dYJKXud7ETDntR3bzItEjf91tpUFkS1Ww5mqd6zP+eL1ufBJSD37qAY1o9uH9Po1TqgvL7yz7UHwF/pxXzFpQFRBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDEH8l/APoBrF6+vZRSAAAAAElFTkSuQmCC";
    document.getElementById('tweet1').appendChild(img);
}
