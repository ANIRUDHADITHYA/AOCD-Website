import './AddCompounds.css';
import { useState } from 'react';
import Axios from 'axios';
import AdminNavbar from "./../AdminNavbar/AdminNavbar";


function AddCompounds() {


  const [accession_no, set_accession_no] = useState("");
  const [compound_name, set_compound_name] = useState("");
  const [pubchem_cid, set_pubchem_cid] = useState("");
  const [molf, set_molf] = useState("");
  const [mw, set_mw] = useState("");
  const [filter_id, set_filter_id] = useState("");
  const [moa, set_moa] = useState("");
  const [origin, set_origin] = useState("");
  const [sci_name, set_sci_name] = useState("");
  const [ref_doi, set_ref_doi] = useState("");
  const [yop, set_yop] = useState("");
  const [jonl_name, set_jonl_name] = useState("");
  const [class_comp, set_class_comp] = useState("");
  const [bio_act, set_bio_act] = useState("");
  const [iupac_name, set_iupac_name] = useState("");
  const [canl_smiles, set_canl_smiles] = useState("");
  const [inchl, set_inchl] = useState("");
  const [xlogp3, set_xlogp3] = useState("");
  const [h_bond_d, set_h_bond_d] = useState("");
  const [h_bond_a, set_h_bond_a] = useState("");
  const [mol_refa, set_mol_refa] = useState("");
  const [tpsa, set_tpsa] = useState("");
  const [rot_bonds, set_rot_bonds] = useState("");
  const [heavy_atoms, set_heavy_atoms] = useState("");
  const [lipinski, set_lipinski] = useState("");
  const [bbb_per, set_bbb_per] = useState("");
  const [bioavail, set_bioavail] = useState("");
  const [ld50_val, set_ld50_val] = useState("");
  const [toxicity, set_toxicity] = useState("");

  const SubmitTable = () =>{
    console.log("submitted")
    
    Axios.post("http://localhost:5000/addcompound", {accession_no: accession_no, compound_name: compound_name, 
                                                      pubchem_cid: pubchem_cid, molf: molf, mw: mw, filter_id: filter_id, moa: moa, origin: origin, 
                                                      sci_name: sci_name, ref_doi: ref_doi, yop: yop, jonl_name: jonl_name, class_comp: class_comp, 
                                                      bio_act: bio_act, iupac_name: iupac_name, canl_smiles: canl_smiles, inchl: inchl, xlogp3: xlogp3,
                                                      h_bond_d: h_bond_d, h_bond_a: h_bond_a, mol_refa: mol_refa, tpsa: tpsa, rot_bonds: rot_bonds,
                                                      heavy_atoms: heavy_atoms, lipinski: lipinski, bbb_per: bbb_per, bioavail: bioavail,
                                                      ld50_val: ld50_val, toxicity: toxicity});
    
  alert("Added Sucessfully")
    
  };

  return (
    <>
    <AdminNavbar colors={true}/>
    <div className='container'>
      <form action="#">
        <div className="form first">
            <div className="details personal">
                <span className="title">Compound Details</span>
                <div className='fields'>
                  <div className='input-field'>
                    <label>Accession No</label>
                    <input type="text" name="accession_no" onChange={(e)=>{
                      set_accession_no(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Compound Name</label>
                    <input type="text" name="compound_name" onChange={(e)=>{
                      set_compound_name(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>PUBCHEM ID</label>
                    <input type="text" name="pubchem_cid"onChange={(e)=>{
                      set_pubchem_cid(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Molecular Formula</label>
                    <input type="text" name="molf" onChange={(e)=>{
                      set_molf(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Molecular Weight</label>
                    <input type="text" name="mw" onChange={(e)=>{
                      set_mw(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Filter ID</label>
                    <input type="text" name="filter_id" onChange={(e)=>{
                      set_filter_id(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Mode of Action</label>
                    <input type="text" name="moa" onChange={(e)=>{
                      set_moa(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Origin</label>
                    <input type="text" name="origin"onChange={(e)=>{
                      set_origin(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Scientific Name</label>
                    <input type="text" name="sci_name" onChange={(e)=>{
                      set_sci_name(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Ref DOI</label>
                    <input type="text" name="ref_doi" onChange={(e)=>{
                      set_ref_doi(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Year of Publication</label>
                    <input type="text" name="yop" onChange={(e)=>{
                      set_yop(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Name of Journal</label>
                    <input type="text" name="jonl_name"onChange={(e)=>{
                      set_jonl_name(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Class of Compounds</label>
                    <input type="text" name="class_comp" onChange={(e)=>{
                      set_class_comp(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Biological Activity</label>
                    <input type="text" name="bio_act" onChange={(e)=>{
                      set_bio_act(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>IUPAC Name</label>
                    <input type="text" name="iupac_name" onChange={(e)=>{
                      set_iupac_name(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Canonical Smiles</label>
                    <input type="text" name="canl_smiles" onChange={(e)=>{
                      set_canl_smiles(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>InchI</label>
                    <input type="text" name="inchl"onChange={(e)=>{
                      set_inchl(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>xlogP3</label>
                    <input type="text" name="xlogp3" onChange={(e)=>{
                      set_xlogp3(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>H-Bond Donor</label>
                    <input type="text" name="h_bond_d" onChange={(e)=>{
                      set_h_bond_d(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>H-Bond Acceptor</label>
                    <input type="text" name="h_bond_a" onChange={(e)=>{
                      set_h_bond_a(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Molar Refraction</label>
                    <input type="text" name="mol_refa"onChange={(e)=>{
                      set_mol_refa(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>TPSA</label>
                    <input type="text" name="tpsa" onChange={(e)=>{
                      set_tpsa(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>No. of rotatable Bonds</label>
                    <input type="text" name="rot_bonds" onChange={(e)=>{
                      set_rot_bonds(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>No. of heavy Atoms</label>
                    <input type="text" name="heavy_atoms" onChange={(e)=>{
                      set_heavy_atoms(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Lipinski - Drug likeness</label>
                    <input type="text" name="lipinski" onChange={(e)=>{
                      set_lipinski(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>BBB Permeant</label>
                    <input type="text" name="bbb_per"onChange={(e)=>{
                      set_bbb_per(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Bioavailability Score</label>
                    <input type="text" name="bioavail" onChange={(e)=>{
                      set_bioavail(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>LD50 values</label>
                    <input type="text" name="ld50_val" onChange={(e)=>{
                      set_ld50_val(e.target.value)}}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Toxicity Class</label>
                    <input type="text" name="toxicity" onChange={(e)=>{
                      set_toxicity(e.target.value)}}>
                    </input>
                  </div>
                </div>
                <button class="nextBtn" onClick={SubmitTable}>
                  <span class="btnText">Add Data</span>
                  <i class="uil uil-navigator"></i>
                </button>
              </div>
            </div>        
      </form>
    </div>
    </>
  );
}

export default AddCompounds;
