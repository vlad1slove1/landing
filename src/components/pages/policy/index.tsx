'use client';

import useClientLocale from '@/hooks/useClientLocale';
import StyledButton from '@/components/ui/styledButton';
import { Path } from '@/lib/enums';

import styles from './index.module.scss';

export default function Page() {
    const {
        translations: { policy },
    } = useClientLocale();

    const renderArticles = (articles: Record<string, unknown>) => {
        return (
            <ul>
                {Object.entries(articles).map(([key, value]) =>
                    Array.isArray(value) ? (
                        <li key={key}>
                            {value.map((line, index) => (
                                <p key={`${key}-${index}`}>{line}</p>
                            ))}
                        </li>
                    ) : (
                        <li key={key}>{`${key}. ${value}`}</li>
                    )
                )}
            </ul>
        );
    };

    const renderTable = (table: Record<string, string>) => {
        return (
            <table className="table-auto w-full border-collapse mt-2">
                <tbody>
                    {Object.entries(table).map(([key, value], idx) => (
                        <tr key={idx}>
                            <td className="border border-gray-300 px-4 py-2">{key}</td>
                            <td className="border border-gray-300 px-4 py-2">{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <h1>{policy?.label}</h1>

                {Object.values(policy?.chapters ?? {}).map((chapter, idx) => (
                    <div key={idx}>
                        <h2>{chapter.title}</h2>

                        {chapter.articles && renderArticles(chapter.articles)}
                        {chapter.table && renderTable(chapter.table)}
                    </div>
                ))}

                <StyledButton
                    label={policy?.button}
                    href={Path.HOME}
                    className="flex self-center mt-6 mb-10"
                />
            </div>
        </div>
    );
}
