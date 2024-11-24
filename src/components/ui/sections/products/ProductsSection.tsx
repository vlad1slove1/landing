import React from 'react';
import getLocale from '@/app/[lang]/getLocale';
import Image from 'next/image';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';

import type { LangParams } from '@/app/[lang]/layout';

import styles from './ProductsSection.module.scss';

type Product = {
    label: string;
    [key: string]: string;
};

const ProductsSection: React.FC<LangParams> = async ({ lang }) => {
    const t = await getLocale(lang);
    const products = Object.entries(t?.sections.products.products ?? {});
    return (
        <div className={styles.container}>
            <div className={styles.topContent}>
                <ul>
                    <li>{t.sections.products.label}</li>
                </ul>
                <h1>{t.sections.products.description}</h1>
            </div>
            <div className={styles.cards}>
                {products.map(([key, product]) =>
                    renderProduct(key, product as unknown as Product)
                )}
            </div>
        </div>
    );
};

const renderProduct = async (key: string, product: Product) => {
    const { label, ...listItems } = product;
    const imageSrc = (await import(`@/public/${key}.svg`)).default;

    return (
        <Card radius="lg" className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <h1>{label}</h1>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                {imageSrc && (
                    <Image alt={label} src={imageSrc} priority={false} className={styles.image} />
                )}
            </CardBody>
            <CardFooter className={styles.cardFooter}>
                {Object.values(listItems).map((item, index) => (
                    <Chip
                        key={index}
                        className={styles.chip}
                        size="lg"
                        variant="shadow"
                        color="primary"
                    >
                        {item}
                    </Chip>
                ))}
            </CardFooter>
        </Card>
    );
};

export default ProductsSection;
