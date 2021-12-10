class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = '744534304ffacc290564d8cbde277a91';

	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	getAllCharacters = () => {
		return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
		// return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=744534304ffacc290564d8cbde277a91`);
	}

	getCharacter = (id) => {
		return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
	}
}

export default MarvelService;

// https://gateway.marvel.com:443/v1/public/characters?apikey=744534304ffacc290564d8cbde277a91
// https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=744534304ffacc290564d8cbde277a91