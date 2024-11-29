/* eslint-disable max-len */

import { NextResponse } from 'next/server';

export const GET = async () => {
    const vCardContent = `
        BEGIN:VCARD
        VERSION:3.0
        N:Мальцев;Валерий;Александрович;;
        FN:Мальцев Валерий Александрович
        ORG:Unlimited performance business processes
        TITLE:Разработка ПО
        TEL;TYPE=WORK:+7-918-315-6986
        EMAIL;TYPE=INTERNET:va-maltsev@yandex.ru
        URL:https://t.me/vamaltsev
        ADR;TYPE=WORK:;;Краснодарский край, город Краснодар;;;;
        NOTE:Создаем индивидуальные информационные продукты для автоматизации бизнеса и получения конкурентного преимущества
        END:VCARD
    `;

    const headers = new Headers({
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment; filename="Maltsev_Valeriy_UPBP_Contact.vcf"',
    });

    return new NextResponse(vCardContent, { headers });
};
