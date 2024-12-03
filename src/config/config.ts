export const config = {
    name: 'UPBP',
    description: 'Unlimited Performance Business Processes',
};

export const languages = [
    { label: 'Русский', key: 'ru' },
    { label: 'English', key: 'en' },
];

export const vCards: { [key: string]: string } = {
    maltsev: `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8: Валерий Александрович Мальцев
N;CHARSET=UTF-8:Мальцев;Валерий;Александрович;;
NICKNAME;CHARSET=UTF-8:
UID;CHARSET=UTF-8:
EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:
EMAIL;CHARSET=UTF-8;type=WORK,INTERNET:va-maltsev@yandex.ru
TEL;TYPE=CELL:+79183156986
ADR;CHARSET=UTF-8;TYPE=HOME:;;;г. Краснодар;;;
ADR;CHARSET=UTF-8;TYPE=WORK:;;;;;;
ORG;CHARSET=UTF-8:UP-BP
URL;type=WORK;CHARSET=UTF-8:https://up-bp.ru
END:VCARD`,

    terentyev: `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8: Тереньтев Дмитрий Викторович
N;CHARSET=UTF-8:Тереньтев;Дмитрий;Викторович;;
NICKNAME;CHARSET=UTF-8:
UID;CHARSET=UTF-8:
EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:
EMAIL;CHARSET=UTF-8;type=WORK,INTERNET:K9_90@mail.ru
TEL;TYPE=CELL:+79180887774
ADR;CHARSET=UTF-8;TYPE=HOME:;;;г. Краснодар;;;
ADR;CHARSET=UTF-8;TYPE=WORK:;;;;;;
ORG;CHARSET=UTF-8:UP-BP
URL;type=WORK;CHARSET=UTF-8:https://up-bp.ru
END:VCARD`,
};
