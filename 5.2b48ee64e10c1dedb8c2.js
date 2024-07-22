(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Tln7:function(e,t,n){"use strict";n.r(t),n.d(t,"ManageEmployeeModule",function(){return f});var o=n("ofXK"),a=n("3Pt+"),r=n("tyNb"),i=function(e){return e.SD="Software Developer",e.SSD="Senior Software Developer",e.QA="Quality Assurance",e.TL="Technical Lead",e.TM="Manager",e}({}),c=n("fXoL"),l=n("FOT/");function b(e,t){if(1&e&&(c.Nb(0,"option",23),c.fc(1),c.Mb()),2&e){const e=t.$implicit;c.Xb("value",e),c.zb(1),c.hc(" ",e," ")}}function s(e,t){if(1&e&&(c.Nb(0,"div",24),c.Nb(1,"p"),c.fc(2),c.Mb(),c.Mb()),2&e){const e=c.Wb();c.zb(1),c.Bb(e.response.status),c.zb(1),c.gc(e.response.message)}}let m=(()=>{class e{constructor(e,t,n){this.fb=e,this.route=t,this.empService=n,this.designations=[i.SD,i.SSD,i.QA,i.TL,i.TM],this.isEditMode=!1,this.title="Create Employee"}ngOnInit(){this.employeeForm=this.fb.group({name:["",a.m.required],email:["",[a.m.required,a.m.email]],companyName:["",a.m.required],contact:["",a.m.required],designation:[this.designations[0],a.m.required],avatar:["",a.m.required]});const e=this.route.snapshot.paramMap.get("email");if(e){this.isEditMode=!0,this.title="Edit Employee",this.employeeForm.get("email").disable();const t=this.empService.getIndividualEmployee(e);this.employeeForm.setValue(t)}this.response={}}onSubmit(){this.employeeForm.valid&&(this.response=this.empService.saveEmployeeDetails(this.employeeForm.value,this.isEditMode),"success"==this.response.status&&this.employeeForm.reset())}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(a.b),c.Kb(r.a),c.Kb(l.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["create-employee"]],decls:39,vars:6,consts:[[1,"container"],[1,"page-title"],[1,"form-group",3,"formGroup","ngSubmit"],[1,"form-control"],["for","name"],["id","name","formControlName","name","type","text","placeholder","Enter name",1,"form-control"],["for","email"],["id","email","formControlName","email","type","email","placeholder","Enter email",1,"form-control",3,"readonly"],["for","companyName"],["id","companyName","formControlName","companyName","type","text","placeholder","Enter company name",1,"form-control"],["for","contact"],["id","contact","formControlName","contact","type","text","placeholder","Enter contact number",1,"form-control"],["for","designation"],["id","designation","formControlName","designation",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[1,"avatar-button"],["id","male","name","avatar","formControlName","avatar","type","radio","value","male",1,"form-control"],["for","designation",1,"avatar-images"],["src","/assets/avatar/male.jpg","alt","Male avatar"],["id","female","name","avatar","formControlName","avatar","type","radio","value","female",1,"form-control"],["src","/assets/avatar/female.jpg","alt","Female avatar"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","notification",4,"ngIf"],[3,"value"],[1,"notification"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"h2",1),c.fc(2),c.Mb(),c.Nb(3,"form",2),c.Ub("ngSubmit",function(){return t.onSubmit()}),c.Nb(4,"div",3),c.Nb(5,"label",4),c.fc(6,"Name"),c.Mb(),c.Lb(7,"input",5),c.Mb(),c.Nb(8,"div",3),c.Nb(9,"label",6),c.fc(10,"Email "),c.Mb(),c.Lb(11,"input",7),c.Mb(),c.Nb(12,"div",3),c.Nb(13,"label",8),c.fc(14,"Company Name"),c.Mb(),c.Lb(15,"input",9),c.Mb(),c.Nb(16,"div",3),c.Nb(17,"label",10),c.fc(18,"Contact"),c.Mb(),c.Lb(19,"input",11),c.Mb(),c.Nb(20,"div",3),c.Nb(21,"label",12),c.fc(22,"Designation"),c.Mb(),c.Nb(23,"select",13),c.ec(24,b,2,2,"option",14),c.Mb(),c.Mb(),c.Nb(25,"div",3),c.Nb(26,"label",12),c.fc(27,"Avatar"),c.Mb(),c.Nb(28,"div",15),c.Lb(29,"input",16),c.Nb(30,"label",17),c.Lb(31,"img",18),c.Mb(),c.Mb(),c.Nb(32,"div",15),c.Lb(33,"input",19),c.Nb(34,"label",17),c.Lb(35,"img",20),c.Mb(),c.Mb(),c.Mb(),c.Nb(36,"button",21),c.fc(37," Submit "),c.Mb(),c.Mb(),c.ec(38,s,3,3,"div",22),c.Mb()),2&e&&(c.zb(2),c.gc(t.title),c.zb(1),c.Xb("formGroup",t.employeeForm),c.zb(8),c.Xb("readonly",t.isEditMode),c.zb(13),c.Xb("ngForOf",t.designations),c.zb(12),c.Xb("disabled",t.employeeForm.invalid),c.zb(2),c.Xb("ngIf",null==t.response?null:t.response.message))},directives:[a.n,a.g,a.d,a.a,a.f,a.c,a.l,o.h,a.j,o.i,a.i,a.o],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;border:1px solid #ddd;border-radius:8px;background-color:#f8f9fa;justify-content:flex-start;padding:0 30px 30px}.container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{flex:1 100%;text-align:center;margin-bottom:20px}.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{margin-bottom:15px}.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ddd;border-radius:4px}.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:16px}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#648cef}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{border:1px solid #999;background-color:#ccc;color:#666}.container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{flex:1 100%;margin:5px 0}.container[_ngcontent-%COMP%]   .avatar-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:50px;border-radius:50%}.container[_ngcontent-%COMP%]   .avatar-button[_ngcontent-%COMP%]{display:flex;flex-flow:row;justify-content:space-evenly}.container[_ngcontent-%COMP%]   .avatar-button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:6%}"]}),e})();const d=[{path:"edit/:email",component:m},{path:"create",component:m}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({imports:[[r.e.forChild(d)],r.e]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({imports:[[o.b,a.k,p]]}),e})()}}]);