import { NextResponse } from 'next/server';

export const GET = async () => {
    const vCardContent = `BEGIN:VCARD
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
ORG;CHARSET=UTF-8:UPDP
URL;type=WORK;CHARSET=UTF-8:https://up-bp.ru
END:VCARD`;

    const headers = new Headers({
        'Content-Type': 'text/x-vcard;charset=utf-8;',
        'Content-Disposition': 'attachment; filename="Maltsev_Valeriy_UPBP_Contact.vcf"',
    });

    return new NextResponse(vCardContent, { headers });
};
