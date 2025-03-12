import PocketBase from 'pocketbase';
const pb = new PocketBase('http://localhost:8090');

export { pb };
// Importer les collections

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
export async function GetActivite() {
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
    return await pb.collection('Invite').getFullList({
      sort: 'nom',
    });
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


