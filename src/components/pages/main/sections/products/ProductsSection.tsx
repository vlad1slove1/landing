import React from 'react';
import getLocale from '@/app/[locale]/getLocale';
import Image from 'next/image';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';

import type { LangParams } from '@/app/[locale]/layout';

import styles from './ProductsSection.module.scss';

type Product = {
    label: string;
    [key: string]: string;
};

const ProductsSection: React.FC<LangParams> = async ({ locale }) => {
    const t = await getLocale(locale);
    const { label, description, products } = t.sections.products;

    return (
        <div id="productsSection" className={styles.container}>
            <div className={styles.topContent}>
                <ul>
                    <li>{label}</li>
                </ul>
                <h1>{description}</h1>
            </div>
            <div className={styles.cards}>
                {Object.entries(products).map(([key, product]) =>
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
                {imageSrc && <Image alt={label} src={imageSrc} priority={false} />}
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
