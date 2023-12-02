# Staffinc - Management Client Portal

![Staffinc Suite Logo](./docs/staffinc_logo.svg)

## Overview

Staffinc HRMS is a Human Resource Management System (HRMS) application built using NextJS. The application follows the principles of Domain-Driven Design (DDD) to organize codebase around specific business domains.

## 🧾 Table of Contents

-   [Overview](#overview)
-   [Installation](#installation)
-   [How to Contribute](#how-to-contribute)
-   [Packages Used](#packages-used)
-   [Domain-Driven Design (DDD)](#domain-driven-design-ddd)
-   [Code Style Rules](#code-style-rules)
    -   [Component](#component)
    -   [Datatable](#datatable)
-   [JSON Schema](#json-schema)
-   [Related Urls](#related-urls)
-   [TODO](#todo)

## 🎛 Installation

To run the application locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/kerjaan-cp-rewrite.git
    cd kerjaan-cp-rewrite
    ```

2. **Install dependencies using pnpm:**

    ```bash
    pnpm install
    ```

3. **Start the development server:**

    ```bash
    pnpm run dev
    ```

4. **Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.**

## 🤝 How to Contribute

If you'd like to contribute to the development of Staffinc HRMS, follow these steps:

1. **Fork the repository on GitHub.**
2. **Clone your forked repository locally.**
3. **Create a new branch for your feature or bug fix:**

    ```bash
    git checkout -b feature-name
    ```

4. **Make your changes and commit them:**

    ```bash
    git commit -m "Your commit message"
    ```

5. **Push your changes to your fork:**

    ```bash
    git push origin feature-name
    ```

6. **Open a pull request on GitHub, describing the changes you made.**

## 📦 Packages Used

-   **@mantine/core**: Mantine is a React component library for modern web development.
-   **axios**: HTTP client for making requests to APIs.
-   **clsx**: A tiny utility for constructing CSS class strings.
-   **mantine-datatable**: Mantine's DataTable component for displaying tabular data.
-   **next**: React framework for building server-rendered applications.
-   **react-hook-form**: React form utilization library
-   **react-query**: Library for managing and caching server state in React applications.
-   **react-toastify**: Toast notifications for React applications.
-   **react**: JavaScript library for building user interfaces.
-   **tailwindcss**: Utility-first CSS framework.
-   **yup**: Schema validation library to help the usage of `react-hook-form`
-   **zustand**: State management for React applications.

## 🎨 Domain-Driven Design (DDD)

Staffinc HRMS organizes its codebase around specific business domains using Domain-Driven Design (DDD) principles. Each module, such as hooks, interfaces, services, etc., is grouped within the `src/modules/<domain>` folder. This structure enhances code readability, maintainability, and scalability by aligning code with business concepts and requirements.

For more information on Domain-Driven Design, refer to the [official DDD website](https://dddcommunity.org/).

## 💻 Code Standar

### Component

#### ❕ Component type

Always create a type definition for a component above the component, irrespective of whether the type will be used in another place or not. Follow this naming convention: `<ComponentName>Props`

#### ❕Mantine Library utilization

We use mantine to construct UI easier, but since we are trying to make this repositroy pug and play. We also need some custom component extending the capability of mantine and also since some of mantine UI does not have capability that we need (eg: Group doesn't have capability to be responsive) hence we create a custom component. Some components that we created by our own:

1. **Layout related**: HStack, VStack, Row, Col
2. **Input related**: TextInput, PasswordInput, Switch
3. **Typography related**:

This Docs will be frequently update based on the update of the codebase since we might create new component during development.

In the `/shared/components` if you found a folder starting with lowercase, it means the components is a component that commonly used and it is extending from component library, such as HStack, VStack, Button, Grid etc. But if you found a folder/file starting with uppercase like `BasicAppLayout` it means it doesn't wrapping/extending capability from component library

---

### Form

We utilize `react-hook-form` library for form usage, but we wrap the library within `useFormAdapter`, again.. we want to expose only the API we need, and in case something bad happen with the library. We just need to change it in one place

---

### Datatable

To enhance the clarity of the Datatable component, separate the initiation of columns and data fetching from the component. It is preferable to create a `use<domain>Datatable`, for example, `useRoleDatatable`.

Within the file, you can fetch the datatable data, set up parameters, or handle pagination. This ensures that the main responsibility of rendering the datatable is not overly complex. Here is an example of `useRoleDatatable`:

<details>
    <summary>
        useRoleDatatable example
    </summary>
    
```ts
export const useRoleDatatable = () => {
    const { data, isFetching: fetching } = useRoleQuery({
        params: { limit: 20, skip: 0 },
        queryOpts: { refetchOnWindowFocus: false },
    });

    const columns: DataTableColumn<Role>[] = useMemo(
        () => [
            {
                accessor: 'name',
                title: 'Role Name',
            },
            { accessor: 'num_accounts', title: 'Account' },
            {
                accessor: 'is_all_access',
                title: 'Access',
                render: ({ is_all_access }: Role) => {
                    return is_all_access ? 'All access' : 'Limited access';
                },
            },
        ],
        [],
    );

    return useMemo(
        () => ({
            columns,
            records: data?.data,
            totalRecords: data?.total,
            fetching,
        }),
        [columns, data, fetching],
    );

};

````
</details>

<details>
    <summary>
        usage of useRoleDatatable
    </summary>

```ts
const RolePage: NextPage = () => {
    const { columns, records, totalRecords, fetching } = useRoleDatatable();

    return (
        <BasicAppLayout
            title="Role List"
            actions={
                <Button
                    leftSection={<AddOutline height="20px" width="20px" />}
                    size="sm"
                >
                    Add Role
                </Button>
            }
        >
            <Datatable<Role>
                columns={columns}
                page={1}
                onPageChange={(page) => console.log(page)}
                totalRecords={totalRecords}
                recordsPerPage={10}
                fetching={fetching}
                records={records}
            />
        </BasicAppLayout>
    );
};

export default RolePage;

````

</details>

## JSON Schema

TODO: Explain about JSON Schema and how we use it in this repo

## Related URLs:

-   development: https://management-dev.staffincsuite.co
-   staging: https://management-stg.staffincsuite.co
-   production: https://management.staffincsuite.co

## TODO

This section is dedicated to updating specific pages as a response to the latest updates in the Staffinc sprint. It's crucial to identify the pages that require updating. If a particular page has already been migrated here, ensure that the update aligns with the new requirements.

-   xx
-   xx
