import PocketBase from 'pocketbase';
const pb = new PocketBase('http://localhost:8090');

export { pb };
// Importer les collections

// Collection Invité
export async function GetHotel() {
    const records = await pb.collection('Hotel').getFullList();
    return records; 
  }

// Collection Invité
export async function GetInvite() {
    const records = await pb.collection('Invite').getFullList();
    return records; 
  }

// Collection Film
export async function getFilm() {
        const records = await pb.collection('Film').getFullList(); 
        return records; 

}

// Collection Activité
export async function getActivite() {
    const records = await pb.collection('Activite').getFullList();
    return records; 
  }

// Retourne la liste de tous les films triés par date de projection

export async function getAllFilm() {
    const records = await pb.collection('Film').getFullList();
    return records;
}

// Retourne la liste des activités triés par date de projection

export async function getAllActivite() {
    return await pb.collection('Activite').getFullList({
      sort: 'first_date_heure',
      sort: 'second_date_heure',
    });
  }

// Retourne la liste de tous les acteurs / réalisateurs participant au festival triés par ordre alphabétique

export async function getAllInvite() {
    const records = await pb.collection('Invite').getFullList();
    return records;
}

// Retourne la liste de tous les hotels

export async function getAllHotel() {
    const records = await pb.collection('Hotel').getFullList();
    return records;
}

// Retourne les infos d'un film en donnant son id en paramètre

export async function getFilmId(id) {
    const film = await pb.collection('Film').getOne(id);
    return film;
}

// Retourne les infos d'une activité en donnant son id en paramètre

export async function getActiviteId(id) {
    return await pb.collection('Activite').getOne(id);
  }

// Retourne les infos d'un acteur / réalisateur en donnant son id en paramètre

export async function getInviteId(id) {
    return await pb.collection('Invite').getOne(id);
  }

// Retourne toutes les activités d’un animateur donné par son id

export async function getActiviteAnimateurId(id) {
    return await pb.collection('Activite').getFullList({
      filter: `animateur_id = "${id}"`,
    });
  }

// Retourne toutes les activités d’un animateur donné par son nom

export async function getActiviteAnimateurNom(titre) {
    return await pb.collection('Activite').getFullList({
      filter: `animateur_nom = "${titre}"`,
    });
  }

// Aermet d’ajouter ou modifier les informations d’un film, activité ou invité

export async function upsertRecord(collection) {
    if (id) {
      // Modifier
      return await pb.collection(collection).update(id, data);
    } else {
      // Ajouter
      return await pb.collection(collection).create(data);
    }
  }

// Fonction pour récupérer un film spécifique par son ID
export async function oneFilmID(id) {
    const oneRecord = await pb.collection('Film').getOne(id);
    return oneRecord;
}

// Fonction pour récupérer un Actvité spécifique par son ID
export async function oneActiviteID(id) {
    const oneRecord = await pb.collection('Activite').getOne(id);
    return oneRecord;
}

// Fonction pour récupérer un Invité spécifique par son ID
export async function oneInviteID(id) {
    const oneRecord = await pb.collection('Invite').getOne(id);
    return oneRecord;
}
