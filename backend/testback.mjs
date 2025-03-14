


export async function GetHotel() {
    try {
        const records = await pb.collection('Hotel').getFullList();
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des hôtels :", error);
        return [];
    }
}

export async function GetInvite() {
    try {
        const records = await pb.collection('Invite').getFullList();
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des invités :", error);
        return [];
    }
}

export async function getFilm() {
    try {
        const records = await pb.collection('Film').getFullList();
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
        return [];
    }
}

export async function getActivite() {
    try {
        const records = await pb.collection('Activite').getFullList();
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des activités :", error);
        return [];
    }
}

export async function getAllFilm() {
    try {
        const records = await pb.collection('Film').getFullList();
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function getAllActivite() {
    try {
        const records = await pb.collection('Activite').getFullList();
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function getAllInvite() {
    try {
        const records = await pb.collection('Invite').getFullList();
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function getAllHotel() {
    try {
        const records = await pb.collection('Hotel').getFullList();
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function getFilmId(id) {
    try {
        const film = await pb.collection('Film').getOne(id);
            return film;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function getInviteId(id) {
    try {
        const invite = await pb.collection('Invite').getOne(id);
            return invite;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function getActiviteId(id) {
    try {
        const activite = await pb.collection('Activite').getOne(id);
            return activite;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function getActiviteAnimateurId(id) {
    try {
        const activite = await pb.collection('Activite').getFullList({
            filter: `animateur_id = "${id}"`,
        });
        return activite;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function getActiviteAnimateurNom(nom) {
    try {
        const activite = await pb.collection('Activite').getFullList({
            filter: `animateur_nom = "${nom}"`,
        });
        return activite;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function upsertRecord(collection, id, data) {
    try {
        if (id) {
            // Modifier un enregistrement existant
            return await pb.collection(collection).update(id, data);
        } else {
            // Ajouter un nouvel enregistrement
            return await pb.collection(collection).create(data);
        }
    } catch (error) {
        console.error(`Erreur lors de l'ajout/modification de ${collection}:`, error);
        return null;
    }
}

export async function oneFilmID(id) {
    try {
        const oneRecord = await pb.collection('Film').getOne(id);
            return oneRecord;

    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function oneInviteID(id) {
    try {
        const oneRecord = await pb.collection('Invite').getOne(id);
            return oneRecord;

    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}

export async function oneActiviteID(id) {
    try {
        const oneRecord = await pb.collection('Activite').getOne(id);
            return oneRecord;

    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}