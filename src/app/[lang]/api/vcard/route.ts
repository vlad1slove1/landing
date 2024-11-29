/* eslint-disable max-len */

import { NextResponse } from 'next/server';

export const GET = async () => {
    const vCardContent = `
        BEGIN:VCARD
        VERSION:3.0
        N:Мальцев;Валерий;Александрович;;
        FN:Мальцев Валерий Александрович (UPBP)
        ORG:ИП Мальцев В.А.
        TITLE:Разработка ПО
        TEL;TYPE=cell:+79183156986
        EMAIL:va-maltsev@yandex.ru
        URL:https://t.me/vamaltsev
        ADR;TYPE=work:;;Краснодарский край, город Краснодар;;;;
        NOTE:Создаем индивидуальные информационные продукты для автоматизации бизнеса и получения конкурентного преимущества
        END:VCARD
    `;

    const headers = new Headers({
        'Content-Type': 'text/vcard',
        'Content-Disposition': 'attachment; filename="Maltsev_Valeriy_UPBP_Contact.vcf"',
    });

    return new NextResponse(vCardContent, { headers });
};
