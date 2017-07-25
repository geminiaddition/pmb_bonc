package com.bonc.model.jihe;

public class AuditBean {
	 public Integer check_rule_num;
	 public Integer problem_num;
	 public String answer_prov;
	 public Integer etl_task_num;
	 public Integer etl_task_finish;
	 public Integer etl_task_err;
	 public String unanswer_prov;
	 public String examine_prov_t_3;
	public Integer getCheck_rule_num() {
		return check_rule_num;
	}
	public void setCheck_rule_num(Integer check_rule_num) {
		this.check_rule_num = check_rule_num;
	}
	public Integer getProblem_num() {
		return problem_num;
	}
	public void setProblem_num(Integer problem_num) {
		this.problem_num = problem_num;
	}
	public String getAnswer_prov() {
		return answer_prov;
	}
	public void setAnswer_prov(String answer_prov) {
		this.answer_prov = answer_prov;
	}
	public Integer getEtl_task_num() {
		return etl_task_num;
	}
	public void setEtl_task_num(Integer etl_task_num) {
		this.etl_task_num = etl_task_num;
	}
	public Integer getEtl_task_finish() {
		return etl_task_finish;
	}
	public void setEtl_task_finish(Integer etl_task_finish) {
		this.etl_task_finish = etl_task_finish;
	}
	public Integer getEtl_task_err() {
		return etl_task_err;
	}
	public void setEtl_task_err(Integer etl_task_err) {
		this.etl_task_err = etl_task_err;
	}
	public String getUnanswer_prov() {
		return unanswer_prov;
	}
	public void setUnanswer_prov(String unanswer_prov) {
		this.unanswer_prov = unanswer_prov;
	}
	public String getExamine_prov_t_3() {
		return examine_prov_t_3;
	}
	public void setExamine_prov_t_3(String examine_prov_t_3) {
		this.examine_prov_t_3 = examine_prov_t_3;
	}
	@Override
	public String toString() {
		return "AuditBean [check_rule_num=" + check_rule_num + ", problem_num=" + problem_num + ", answer_prov="
				+ answer_prov + ", etl_task_num=" + etl_task_num + ", etl_task_finish=" + etl_task_finish
				+ ", etl_task_err=" + etl_task_err + ", unanswer_prov=" + unanswer_prov + ", examine_prov_t_3="
				+ examine_prov_t_3 + "]";
	}
	 

}
