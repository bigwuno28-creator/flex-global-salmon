import MainLayout from "../layouts/MainLayout";

import ProductsHero from "../components/products/ProductsHero";
import ProductGrid from "../components/products/ProductGrid";
import TechnicalTable from "../components/products/TechnicalTable";
import QualityStandards from "../components/products/QualityStandards";
import ColdChain from "../components/products/ColdChain";
import ProductFAQ from "../components/products/ProductFAQ";
import ProductsCTA from "../components/products/ProductsCTA";

function Products() {

  return (

    <MainLayout>

      <ProductsHero />

      <ProductGrid />

      <TechnicalTable />

      <QualityStandards />

      <ColdChain />

      <ProductFAQ />

      <ProductsCTA />

    </MainLayout>

  );

}

export default Products;