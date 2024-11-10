import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout';
import MoviesPageContent from '@/components/MoviesPageContent/MoviesPageContent';

export default function MoviesPage() {
    return (
        <DefaultPageLayout activeTab="movies">
            <MoviesPageContent />
        </DefaultPageLayout>
    );
}
