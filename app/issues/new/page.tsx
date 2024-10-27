'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function newIssuePage() {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root  placeholder='Title'/>
        <SimpleMDE placeholder='Description' />

        <Button>Submit New Issue</Button>
    </div>
  )
}

export default newIssuePage