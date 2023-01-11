import React,{useState} from "react";

import { Box } from "@mui/material";
import cn from 'classnames'

import style from "./Vacancy.module.scss";
import { vacancies } from "mock/v1/vacancies";

export const Vacancy = () => {  
  return (
    <>
      {vacancies.map((e: any) => {
        return (
          <Box className={style.vacancy}>
            <Box className={style.vacancy_company_image_box}>
              <img src={e.aboutCompany.companyImg} className={style.vacany_company_image} />
            </Box>
            <Box className={style.vacancy_primary_data}>
              <p className={style.vacancy_head_title}>{e.vacancyName}</p>
              <p className={style.vacany_sub_company}>{e.aboutCompany.companyName}</p>
            </Box>
            <Box>
              <i className={`${style.vacancy_icon} fa-solid fa-eye`}></i>
              <i className={`${style.vacancy_icon} fa-regular  ${cn({"fa-solid":false})} fa-heart ${cn({[style.fa_heart_active]:false})}`}></i>
            </Box>
          </Box>
        );
      })}
      {vacancies.map((e: any) => {
        return (
          <Box className={style.vacancy}>
            <Box className={style.vacancy_company_image_box}>
              <img src={e.aboutCompany.companyImg} className={style.vacany_company_image} />
            </Box>
            <Box className={style.vacancy_primary_data}>
              <p className={style.vacancy_head_title}>{e.vacancyName}</p>
              <p className={style.vacany_sub_company}>{e.aboutCompany.companyName}</p>
            </Box>
            <Box>
              <i className={`${style.vacancy_icon} fa-solid fa-eye`}></i>
              <i className={`${style.vacancy_icon} fa-regular fa-heart`}></i>
              <i className={`${style.vacancy_icon} fa-solid fa-heart fa-heart-active`}></i>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
