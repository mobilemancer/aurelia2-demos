export class BookService {
    private duneDescription = 'Set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs, Dune tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or "the spice", a drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides.[6] As melange can only be produced on Arrakis, control of the planet is thus a coveted and dangerous undertaking. The story explores the multi-layered interactions of politics, religion, ecology, technology, and human emotion, as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice.';
    private duneMessiahDescription = 'Twelve years after the events described in Dune (1965), Paul "Muad\'Dib" Atreides rules as Emperor. By accepting the role of messiah to the Fremen, Paul had unleashed a jihad which conquered most of the known universe.[2] While Paul is the most powerful emperor ever known, he is powerless to stop the lethal excesses of the religious juggernaut he has created. Although 61 billion people have perished, Paul\'s prescient visions indicate that this is far from the worst possible outcome for humanity. Motivated by this knowledge, Paul hopes to set humanity on a course that will not inevitably lead to stagnation and destruction, while at the same time acting as ruler of the empire and focal point of the Fremen religion.';
    private childrenOfDuneDescription = 'At the end of Dune Messiah, Paul Atreides walks into the desert, a blind man, leaving his twin children Leto and Ghanima in the care of the Fremen, while his sister Alia rules the universe as regent. Awakened in the womb by the spice, the children are the heirs to Paul\'s prescient vision of the fate of the universe, a role that Alia desperately craves. House Corrino schemes to return to the throne, while the Bene Gesserit make common cause with the Tleilaxu and Spacing Guild to gain control of the spice and the children of Paul Atreides.';
    private godEmperorOfDuneDescription = 'Leto II Atreides, the God Emperor, has ruled the universe as a tyrant for 3,500 years after becoming a hybrid of human and giant sandworm in Children of Dune. The death of all other sandworms, and his control of the remaining supply of the all-important drug melange, has allowed him to keep civilization under his complete command. Leto has been physically transformed into a worm, retaining only his human face and arms, and though he is now seemingly immortal and invulnerable to harm, he is prone to instinct-driven bouts of violence when provoked to anger. As a result, his rule is one of religious awe and despotic fear. Leto has disbanded the Landsraad to all but a few Great Houses; the remaining powers defer to his authority, although they individually conspire against him in secret. The Fremen have long since lost their identity and military power, and have been replaced as the Imperial army by the Fish Speakers, an all-female army who obey Leto without question. He has rendered the human population into a state of trans-galactic stagnation; space travel is non-existent to most people in his Empire, which he has deliberately kept to a near-medieval level of technological sophistication. All of this he has done in accordance with a prophecy divined through precognition that will establish an enforced peace preventing humanity from destroying itself through aggressive behavior.';
    private hereticsOfDuneDescription = 'Fifteen hundred years have passed since the 3,500-year reign of the God Emperor Leto II Atreides ended with his assassination; humanity is firmly on the Golden Path, Leto\'s plan to save humanity from destruction. By crushing the aspirations of humans for over three thousand years, Leto caused the Scattering, an explosion of humanity into the rest of the universe upon his death. Now, some of those who went out into the universe are coming back, bent on conquest. Only the Bene Gesserit perceive the Golden Path and are therefore faced with a choice: keep to their traditional role of hidden manipulators who quietly ease tensions and guide human progress while struggling for their own survival, or embrace the Golden Path and push humanity onward into a new future where humans are free from the threat of extinction.';
    private chapterhouseDuneDescription = 'The situation is desperate for the Bene Gesserit as they find themselves the targets of the Honored Matres, whose conquest of the Old Empire is almost complete. The Matres are seeking to assimilate the technology and developed methods of the Bene Gesserit and exterminate the Sisterhood itself. Now in command of the Bene Gesserit, Mother Superior Darwi Odrade continues to develop her drastic, secret plan to overcome the Honored Matres.    The Bene Gesserit are also terraforming the planet Chapterhouse to accommodate the all-important sandworms, whose native planet Dune had been destroyed by the Matres. Sheeana, in charge of the project, expects sandworms to appear soon. The Honored Matres have also destroyed the entire Bene Tleilax civilization, with Tleilaxu Master Scytale the only one of his kind left alive. In Bene Gesserit captivity, Scytale possesses the Tleilaxu secret of ghola production, which he has reluctantly traded for the Sisterhood\'s protection. The first ghola produced is that of their recently deceased military genius, Miles Teg. The Bene Gesserit have two other prisoners on Chapterhouse: the latest Duncan Idaho ghola, and former Honored Matre Murbella, whom they have accepted as a novice despite their suspicion that she intends to escape back to the Honored Matres.';

    private books =
        [
            {
                author: 'Frank Herbert',
                description: this.duneDescription,
                genre: 'Science Fiction',
                id: 1,
                image: 'Dune-Frank_Herbert_(1965)_First_edition.jpg',
                published: 1965,
                title: 'Dune',
            }, {
                author: 'Frank Herbert',
                description: this.duneMessiahDescription,
                genre: 'Science Fiction',
                id: 2,
                image: 'Dune-Frank_Herbert_(1965)_First_edition.jpg',
                published: 1969,
                title: 'Dune Messiah'
            }, {
                author: 'Frank Herbert',
                description: this.childrenOfDuneDescription,
                genre: 'Science Fiction',
                id: 3,
                image: 'Dune-Frank_Herbert_(1965)_First_edition.jpg',
                published: 1976,
                title: 'Children of Dune'
            }, {
                author: 'Frank Herbert',
                description: this.godEmperorOfDuneDescription,
                genre: 'Science Fiction',
                id: 4,
                image: 'Dune-Frank_Herbert_(1965)_First_edition.jpg',
                published: 1981,
                title: 'God Emperor of Dune'
            }, {
                author: 'Frank Herbert',
                description: this.hereticsOfDuneDescription,
                genre: 'Science Fiction',
                id: 5,
                image: 'Dune-Frank_Herbert_(1965)_First_edition.jpg',
                published: 1984,
                title: 'Heretics of Dune'
            }, {
                author: 'Frank Herbert',
                description: this.chapterhouseDuneDescription,
                genre: 'Science Fiction',
                id: 6,
                image: 'Dune-Frank_Herbert_(1965)_First_edition.jpg',
                published: 1985,
                title: 'Chapterhouse: Dune'
            }
        ];

    public getBooks() {
        return this.books;
    }

    public getBook(bookId: number): any {
        return this.books[bookId];
    }

}
