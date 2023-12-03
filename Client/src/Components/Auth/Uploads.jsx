import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Uploads = () => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  const handleSubmit = async () => {
    try {
      console.log('hello');
      const { data } = await axios.post('http://localhost:3500', {
        Title: title,
        Category: category,
        News: value,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <section className="max-w-[800px] mx-auto px-[30px] lg:px-0 mt-[64px] lg:mt-[80px]">
        <div>
          <Box sx={{ minWidth: 120, marginBottom: 2 }}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, marginBottom: 5 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                placeholder="select category"
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value="news">News</MenuItem>
                <MenuItem value="event">Event</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          formats={formats}
          modules={modules}
        />
      </section>
      <section className="max-w-[800px] mx-auto px-[30px] lg:px-0">
        <h3 className="text-center text-[24px] lg:text-[40px] font-bold mb-6">
          A Treatise on the Importance of Urban Planning In Modern Day
        </h3>
        <div
          className="text-[12px] lg:text-[20px] leading-[150%] flex flex-col gap-8 lg:gap-6"
          dangerouslySetInnerHTML={{ __html: value }}
        ></div>
        <div>
          <button onClick={handleSubmit}>Submit post</button>
        </div>
      </section>
    </>
  );
};
export default Uploads;
