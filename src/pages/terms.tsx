import React from "react";
import { Head, Layout, View } from "@app/components/ui";
import { getMarkdownData } from "@app/utils";
import { DataProp, NextPageWithLayout } from "@app/types";
import { Markdown } from "@app/components";
import { subLinks } from "@app/utils/constants";

const Page = ({ data }: { data: DataProp }) => {
  const { slug, content } = data;
  return (
    <Layout>
      <Head title="Terms of use" />
      <View>
        <section className="max-container px-4 py-16 lg:px-10 min-h-screen">
          <div className="my-16 px-4 lg:px-[14rem]">
            <h2 className="text-2xl text-center mb-3">Terms of use</h2>
            <Markdown content={content} />
          </div>
        </section>
      </View>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  // Fetch data from external API
  const data = getMarkdownData("terms.md");

  // Pass data to the page via props
  return { props: { data } };
};

export default Page;
