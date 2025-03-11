import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

// Importer les collections

// Collection Invité
export async function GetInvite() {
    const records = await pb.collection('Invite').getFullList();
    return new Response(JSON.stringify(records), { headers: { "Content-Type": "application/json" } });
  }

// Collection Film
export async function getFilm() {
    try {
        const records = await pb.collection('Film').getFullList(); // Vérifie que la collection s'appelle bien "Film"
        return records; // Retourne les données brutes
    } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
        return []; // Retourne un tableau vide en cas d'erreur
    }
}

// Collection Activité
export async function GetActivite() {
    const records = await pb.collection('Activite').getFullList();
    return new Response(JSON.stringify(records), { headers: { "Content-Type": "application/json" } });
  }

// Retourne la liste de tous les films triés par date de projection

export async function getAllFilm() {
    return await pb.collection('Film').getFullList({
      sort: 'date_heure_projection',
    });
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

export async function getFilmById(id: string) {
    return await pb.collection('Film').getOne(id);
  }

// Retourne les infos d'une activité en donnant son id en paramètre

export async function getActivityById(id: string) {
    return await pb.collection('Activite').getOne(id);
  }

// Retourne les infos d'un acteur / réalisateur en donnant son id en paramètre

export async function getParticipantById(id: string) {
    return await pb.collection('Invite').getOne(id);
  }

// Retourne toutes les activités d’un animateur donné par son id

export async function getActivitiesByAnimatorId(id: string) {
    return await pb.collection('Activite').getFullList({
      filter: `animateur_id = "${id}"`,
    });
  }

// Retourne toutes les activités d’un animateur donné par son nom

export async function getActivitiesByAnimatorName(name: string) {
    return await pb.collection('Activite').getFullList({
      filter: `animateur_nom = "${name}"`,
    });
  }

// Aermet d’ajouter ou modifier les informations d’un film, activité ou invité

export async function upsertRecord(collection: string, data: any, id?: string) {
    if (id) {
      // Modifier
      return await pb.collection(collection).update(id, data);
    } else {
      // Ajouter
      return await pb.collection(collection).create(data);
    }
  }