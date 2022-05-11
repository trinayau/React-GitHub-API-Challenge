import React from 'react';




const RepoForms = () => { 


    

    return <> <h1> form </h1>

    <form aria-label="form" onSubmit={handleSubmit}>
        <input aria-label="UserName" type="text" onChange={updateInput} value={location} />
        <input type="submit" value="Search" />
    </form>
    </>

}

export default RepoForms;
